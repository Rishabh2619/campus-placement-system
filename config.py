# Configuration Settings for Flask App

import os

# Database Configuration
DATABASE_TYPE = 'postgresql'
DATABASE_HOST = os.getenv('DATABASE_HOST', 'localhost')
DATABASE_USER = os.getenv('DATABASE_USER', 'user')
DATABASE_PASSWORD = os.getenv('DATABASE_PASSWORD', 'password')
DATABASE_NAME = os.getenv('DATABASE_NAME', 'dbname')

# Flask App Settings
FLASK_ENV = os.getenv('FLASK_ENV', 'development')
FLASK_DEBUG = os.getenv('FLASK_DEBUG', '1')
FLASK_SECRET_KEY = os.getenv('FLASK_SECRET_KEY', 'your_secret_key')

# Other Environment Variables
EXAMPLE_VARIABLE = os.getenv('EXAMPLE_VARIABLE', 'default_value')