import psycopg2
import os
def init_db():
    conn = psycopg2.connect(
            host=os.getenv('DB_HOST'),
            dbname=os.getenv('DB_NAME'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASS')
        )
    cur = conn.cursor()
    if cur:
        print("db connected")