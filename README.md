
# const {GET,POST,PUT,DELETE} = useAxiosWithAuth()
- use in any component 
- it uses Bearer token in header
- token will be stored and get every time from local storage
- if we want to allow some routes who do not need token there is an array for this (bypass some routes) like sign in or sign up etc
