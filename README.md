# pagination
Pagination for Nodejs 

# Installation
```
npm install --save pagination-js
```

# Usage example

```javascript
route.get('/test', (req, res) => {
    let pagination = (new Pagination(req.query, total)).getPagination();
    res.json(pagination);
});
```

# Test

- Use postman:

```
http://localhost:3333/media/test?itemPerPage=16&page=2
```

- The result:

```json
{
  "totalItem": 15,
  "page": 2,
  "itemPerPage": 16,
  "minIndex": 16,
  "maxIndex": 32
}
```
