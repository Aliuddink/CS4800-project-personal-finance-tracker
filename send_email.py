# sendemail.py

from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Initialize the Mail object
mail = Mail()

# Function to send an email
def send_reset_email(app, recipient_email):
    with app.app_context():
        msg = Message('Password Reset Request',
                      sender=os.getenv('MAIL_USERNAME'),
                      recipients=[recipient_email])
        msg.body = 'Click the link to reset your password: http://example.com/reset-password'
        mail.send(msg)

# Function to configure the Mail object with the app
def configure_mail(app):
    app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER')
    app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT'))  # Convert to integer
    app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
    app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
    app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS') == 'True'  # Convert string to boolean
    app.config['MAIL_USE_SSL'] = os.getenv('MAIL_USE_SSL') == 'True'  # Convert string to boolean
    mail.init_app(app)