# praise-along

🎵 **A platform for collective worship in schools and educational places** 🎵

A Next.js application with PostgreSQL backend, hosted at [www.praise-along.com](https://www.praise-along.com) and deployed using AWS resources.

## About PraiseAlong 🙏

PraiseAlong brings communities together through the power of music and worship! 🎶 Our platform is designed specifically for schools and educational institutions to foster collective worship experiences.

### Features ✨
- 🆓 **Completely FREE** for all schools
- 📅 **Monthly songs** delivered directly to registered schools
- 🏫 **Easy registration** process for educational institutions
- 🤝 **Community-focused** worship experiences

### Getting Started
- Create a .env.local in the root directory which include the following:
```
POSTGRES_USER=praisealong_user
POSTGRES_PASSWORD=praisealong_password
POSTGRES_DB=praisealong_db
POSTGRES_HOST=postgres
POSTGRES_PORT=5432
```
- Run:
```
docker-compose up --build
```
