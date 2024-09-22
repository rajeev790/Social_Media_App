# Use the official Python image from the Docker Hub
FROM python:3.10

# Set environment variables to prevent Python from writing .pyc files to disk
# and to ensure that Python output is sent straight to the terminal (e.g., logs)
ENV PYTHONUNBUFFERED=1

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container at /app
COPY requirements.txt /app/

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . /app/

# Expose port 8000 for the application to be accessed
EXPOSE 8000

# Command to run the application using Gunicorn
CMD ["gunicorn", "social_media.wsgi:application", "--bind", "0.0.0.0:8000"]
