from sqlalchemy import Column, String, Integer
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, index=True)
    country = Column(String)
    state = Column(String)
    department_name = Column(String)
    department_id = Column(String)
    department_img = Column(String)  # Will store image URL or path
    phone_number = Column(String)
    email = Column(String)
    verification_code = Column(String)  # Can be used for the verification system