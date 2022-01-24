import { makeAutoObservable } from "mobx";
import petsData from "../petsData";

class PetStore{
    pets = petsData;
    constructor(){
        makeAutoObservable(this);
    }
    handleAdopt(petId){
        this.pets = this.pets.filter((pet) => pet.id !== petId);
        console.log("Adopted");
    }
}

const petsStore = new PetStore();
export default petsStore;