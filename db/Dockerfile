FROM postgres:15

# Copy the startup script to the docker-entrypoint-initdb.d directory
# Scripts in this directory are automatically executed when the container starts
COPY startup.sql /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5432