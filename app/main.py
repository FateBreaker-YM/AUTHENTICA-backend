
from fastapi import FastAPI, Form, File, UploadFile, Depends
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
from . import crud, models,schemas
from .database import SessionLocal
from .database import engine
from .database import init_db
import os

DATABASE_URL = "sqlite:///./test.db"  # SQLite database file
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to Authentica!"}

@app.on_event("startup")
def startup():
    models.Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/create_user/")
async def create_user(
    full_name: str = Form(...),
    country: str = Form(...),
    state: str = Form(...),
    department_name: str = Form(...),
    department_id: str = Form(...),
    department_img: UploadFile = File(...),
    phone_number: str = Form(...),
    email: str = Form(...),
    verification_code: str = Form(...),
    db: Session = Depends(get_db)
):
    # Save the uploaded image to the 'images' folder
    img_path = f"images/{department_img.filename}"  # Define the image path
    
    # Save the image
    with open(img_path, "wb") as buffer:
        buffer.write(await department_img.read())

    # Create the user in the database
    db_user = crud.create_user(
        db, full_name, country, state, department_name, department_id, img_path, phone_number, email, verification_code
    )
    return {"msg": "User created successfully", "user_id": db_user.id}
