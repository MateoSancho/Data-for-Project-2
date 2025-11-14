# Tren Pedia - Server

This repository is a [json-server](https://github.com/typicode/json-server) created to feed data into the Tren Pedia React Application.

#### [Client Repo here](https://github.com/MateoSancho/Project-2-main)

# Server Structure

## Collections

### athletes

```javascript
{
  id,
  name,
  category,
  brandId,
  image,
  description,
  yt
}
```

### brands

```javascript
{
  id,
  name,
  location,
  yearCreated,
  image,
  description,
  web
}
```

## Used API Endpoints in the App

| HTTP Method | URL             | Request Body                                           | Description                             |
| ----------- | --------------- | ------------------------------------------------------ | --------------------------------------- |
| GET         | `/athletes`     |                                                        | Sends all athletes                      |
| POST        | `/athletes`     | {name, category, brandId, image, description, yt}      | Creates a new athlete                   |
| GET         | `/athletes/:id` |                                                        | Sends all details of a specific athlete |
| PUT         | `/athletes/:id` | {name, category, brandId, image, description, yt}      | Edits an athlete object                 |
| DELETE      | `/athletes/:id` |                                                        | Deletes an athlete object               |
| GET         | `/brands`       |                                                        | Sends all brands                        |
| POST        | `/brands`       | {name, location, yearCreated, image, description, web} | Creates a new brand                     |
| GET         | `/brands/:id`   |                                                        | Sends all details of a specific brand   |
| PUT         | `/brands/:id`   | {name, location, yearCreated, image, description, web} | Edits a brand object                    |
| DELETE      | `/brands/:id`   |                                                        | Deletes a brand object                  |

## Links

### Collaborators

[Mateo - Full Stack Developer & Gym Enthusiast](https://github.com/MateoSancho)

### Project

[Repository Link Client](https://github.com/MateoSancho/Project-2-main)

[Repository Link Server](https://github.com/MateoSancho/Data-for-Project-2)

[Deploy Link](https://trenpedia-7osgexzom-mateos-projects-e2ba422b.vercel.app)

### Slides

[Slides Link](https://docs.google.com/presentation/d/1qhM0rtXPexERKqjPcmekrI4RPXzZI7qKL4Ng46sPu9I/edit?slide=id.p#slide=id.p)
