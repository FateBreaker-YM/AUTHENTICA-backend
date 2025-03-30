from sqlalchemy.orm import Session
from backendAuthentica import models

def create_user(
    db: Session, full_name: str, country: str, state: str, department_name: str, department_id: str, 
    department_img: str, phone_number: str, email: str, verification_code: str
):
    db_user = models.User(
        full_name=full_name,
        country=country,
        state=state,
        department_name=department_name,
        department_id=department_id,
        department_img=department_img,  # Save image path
        phone_number=phone_number,
        email=email,
        verification_code=verification_code
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user