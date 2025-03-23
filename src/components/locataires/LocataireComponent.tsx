"use client";
import {useState} from "react";
import HttpService from "@/services/HttpService";
import API_URL from "@/app/constants/ApiUrl";
import {Alert, Button, Modal} from "react-daisyui";
import Link from "next/link";
import Locataire from "@/models/Locataire";


export default function LocataireComponent({...props}:{locataires:Locataire[]}){
    console.log("Props locataires au rendu:", props.locataires);
    const [locataires, setLocataires] = useState<Locataire[]>(props.locataires);
    console.log("État initial locataires:", locataires);



    return(
        <>
            <h2>Locataires</h2>
            <Link href={"/"}><Button>Retour à l'accueil</Button></Link>
            <ul>
                {locataires.map((locataire:Locataire) =><li key={locataire.id}>
                    {locataire.nom} {locataire.prenom} {locataire.dateN} {locataire.lieuN} <span onClick={
                    ()=> {
                        <Alert status={"warning"}>Attention, vous allez supprimer un bâtiment.</Alert>
                        HttpService.delete(API_URL.locataires + locataire.id).then((response) => {
                            if(response) {
                                const newLocataires = locataires.filter((l: Locataire) => l.id !== locataire.id);
                                setLocataires(newLocataires);
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