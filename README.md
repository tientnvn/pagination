# pagination
Pagination for Nodejs 

# Installation
```
npm install --save pagination-js
```

# Usage example

```javascript
route.get('/test', (req, res) => {
    let total = 15;
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    let pagination = (new Pagination(query, total)).getPagination();
    res.json(pagination);
});
```

# Test

- Use postman:

```
http://localhost:3333/media/test?item_per_page=16&page=2
```

- The result:

```json
{
  "total_item": 15,
  "page": 2,
  "item_per_page": 16,
  "min_index": 16,
  "max_index": 32
}
```
