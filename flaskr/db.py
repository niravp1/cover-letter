import psycopg2.pool
from psycopg2.extensions import cursor
import os
import datetime


pool = psycopg2.pool.SimpleConnectionPool(2,3,
            host=os.getenv('DB_HOST'),
            dbname=os.getenv('DB_NAME'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASS')
        )
def add_user(user_id: int):
    connection1 = pool.getconn()
    cursor = connection1.cursor()
    print('working')
    cursor.execute(""" 
                INSERT INTO users (id, dateof)
                VALUES (%s, %s);
                 """,
                (6, datetime.date(2025,12,6)))
    connection1.commit()
    pool.putconn(connection1)
    


