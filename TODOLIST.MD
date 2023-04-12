# TODO

[/] Una Search Bar per ricercare le serie tv per titolo.
[/] Una pagina per consultare il dettaglio di una serie tv.
[ ] Una vista per consultare le serie tv raggruppate per genere.
[/] Cambio tema: gli utenti devono poter cambiare il tema dell'applicazione (chiaro/scuro).
[/] Una pagina profilo dove l'utente possa specificare le proprie preferenze sul tema chiar/scuro e inserire la propria email.

# DONE

- 23-04-11

1.  moved tvshow and response to app/models dir (for readability)
2.  checked api endpoints for tvmaze
3.  edited tvshow interface to add:
    - summary
    - image.original
4.  added Detail Component
5.  edited html to add <base href="/"> (didn't know this)
6.  added search funct. to the list page

- 23-04-12

7.  added profile component w/ form
8.  moved form logic to userData service (user data is stored in localStorage)
9.  added pipes to improve formatting in list

# NOTES

API Endpoints:

- Show search:
  - https://api.tvmaze.com/search/shows?q=<query/>
- Single series Detail
  - https://api.tvmaze.com/shows/<show-id/>
