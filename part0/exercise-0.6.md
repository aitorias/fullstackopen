```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

    Note over browser,server: Server responds with Status Code: 201 Created.<br/>The server does not ask for a redirect and the browser stays in<br/> the same pagewithout sending more HTTP Requests
```
