# TODO

[X] Una Search Bar per ricercare le serie tv per titolo.
[X] Una pagina per consultare il dettaglio di una serie tv.
[X] Una vista per consultare le serie tv raggruppate per genere.
[/] Cambio tema: gli utenti devono poter cambiare il tema dell'applicazione (chiaro/scuro).
[X] Una pagina profilo dove l'utente possa specificare le proprie preferenze sul tema chiar/scuro e inserire la propria email.

# DONE

- 23-04-11

1.  Moved tvshow and response to app/models dir (for readability)
2.  Checked api endpoints for tvmaze
3.  Edited tvshow interface to add:
    - Summary
    - Image.original
4.  Added Detail Component
5.  Edited html to add <base href="/"> (didn't know this)
6.  Added search funct. to the list page

- 23-04-12

7.  Added profile component w/ form
8.  Moved form logic to userData service (user data is stored in localStorage)
9.  Added pipes to improve formatting in list (ellipsis and remove html tags)
10. Function in user-data service to handle theming
11. New page for browsing categories
12. shared module for handling movie cards/else
13. css handling for the card hovering (/1)
14. saving to localStorage the previously seen films
15. categories-component
16. forms for filtering cats

- 23-04-13

17. any-all filter in cats
18. animations for the showcard (netflix-style)
19. menu navbar
20. moved show-api interact to own service
21. more-button (responding to visibility)

- 23-04-14

22. fontawesome icons / bootstrap classes
23. save last search to service (to keep when changing page) / local storage (when reloading app)
24. moved detail to own module (TODO BUG: NOT RELOADING WHEN CLICKING ANY FROM SUGGESTIONS)
25. ...moved browse to own module
26. ...moved search to own module
27. ...moved profile to own module
28.

# NOTES

Used API Endpoints:

- Show search:
  - https://api.tvmaze.com/search/shows?q=<query/>
- Single series Detail
  - https://api.tvmaze.com/shows/<show-id/>
