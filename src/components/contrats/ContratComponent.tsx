"use client";
import {useState} from "react";
import HttpService from "@/services/HttpService";
import API_URL from "@/app/constants/ApiUrl";
import {Alert, Button, Modal} from "react-daisyui";
import Link from "next/link";
import Contrat from "@/models/Contrat";


export default function ContratComponent({...props}:{contrats:Contrat[]}){
    const [contrats, setContrats] = useState<Contrat[]>(props.contrats);


    return(
        <>
            <h2>Contrats</h2>
            <Link href={"/"}><Button>Retour à l'accueil</Button></Link>
            <ul>
                {contrats.map((contrat:Contrat) =><li key={contrat.id}>
                    {contrat.dateEntree} {contrat.dateSortie} {contrat.montantLoyer} {contrat.montantCharges} {contrat.statut} <span onClick={
                    ()=> {
                        <Alert status={"warning"}>Attention, vous allez supprimer un contrat.</Alert>
                        console.log("DELETE URL:", API_URL.contrats + contrat.id);
                        HttpService.delete(API_URL.contrats + contrat.id).then((response) => {
                            if(response) {
                                const newContrats = contrats.filter((c: Contrat) => c.id !== contrat.id);
                                setContrats(newContrats);
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