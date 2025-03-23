"use client";
import {useState} from "react";
import HttpService from "@/services/HttpService";
import API_URL from "@/app/constants/ApiUrl";
import {Alert, Button, Modal} from "react-daisyui";
import Appartement from "@/models/Appartement";
import Link from "next/link";


export default function AppartementComponent({...props}:{appartements:Appartement[]}){
    const [appartements, setAppartements] = useState<Appartement[]>(props.appartements);


    return(
        <>
            <h2>Appartements</h2>
            <Link href={"/"}><Button>Retour à l'accueil</Button></Link>
            <ul>
                {appartements.map((appartement:Appartement) =><li key={appartement.id}>
                    {appartement.description} {appartement.nbre_pieces} {appartement.numero} {appartement.surface} <span onClick={
                    ()=> {
                        <Alert status={"warning"}>Attention, vous allez supprimer un bâtiment.</Alert>
                        HttpService.delete(API_URL.batiments + appartement.id).then((response) => {
                            if(response) {
                                const newAppartements = appartements.filter((a: Appartement) => a.id !== appartement.id);
                                setAppartements(newAppartements);
                            }
                        });
                    }
                }>X</span>
                </li>)
                }
            </ul>
        </>
    )
}