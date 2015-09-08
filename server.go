package main

import (
	"fmt"
	"log"
	"net/http"
)

var (
	port = ":8000"
)

func main() {
	fmt.Println("Server running on port", port)
	log.Fatal(http.ListenAndServe(
		port, http.FileServer(http.Dir("."))))
}
