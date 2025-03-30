from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Database URL (For SQLite, you can change it to PostgreSQL, MySQL, etc. if needed)
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

# Create an engine
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})

# Create a session local
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create the base class
Base = declarative_base()

def init_db():
    Base.metadata.create_all(bind=engine)