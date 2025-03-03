"use client";
import Batiment from "@/models/Batiment";
import Link from "next/link";
import {useState} from "react";
import HttpService from "@/services/HttpService";
import API_URL from "@/app/constants/ApiUrl";
import {Alert} from "react-daisyui";

export default function BatimentComponent({...props}:{batiments:Batiment[]}){
const [batiments, setBatiments] = useState<Batiment[]>(props.batiments);

    return(
    <>
        <h2>Bâtiments</h2>
        <Link href={"/"}>Retour à l'accueil</Link>
        <ul>
            <Alert status={"warning"}>Attention, vous allez supprimer un bâtiment.</Alert>
            {batiments.map((batiment:Batiment) =><li key={batiment.id}>
                {batiment.adresse} {batiment.ville} <span onClick={
                ()=> {
                    HttpService.delete(API_URL.batiments + batiment.id).then((response) => {
                        if(response) {
                            const newBatiments = batiments.filter((b: Batiment) => b.id !== batiment.id);
                            setBatiments(newBatiments);
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