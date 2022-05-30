package main

import (
	"errors"
	"fmt"
)

// type User []string

// Struct || objetos
type Person struct {
	name string
	age int
}

func walk(pessoa Person) (string, error){
	if pessoa.name != "daniel"{
		return "", errors.New("o nome deve ser igual a  daniel")
	}

	return pessoa.name + " caminhou", nil
}

func main() {
	// fmt.Println("Olá mundo")
	// nome := "daniel"
	// nome = "carla"
	// fmt.Println(nome)

	// var daniel User
	// daniel = append(daniel, "Daniel Marques", "Sonia")

	// for _, v := range daniel {
	// 	fmt.Println(v)
	// }
	
	daniel := Person {
		name: "daniel",
		age: 12,
	}
	
	fmt.Println(daniel.age)
	response, error := walk(daniel)

	if error != nil {
		fmt.Println(error.Error())
	}

	fmt.Println(response)
}