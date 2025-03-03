"use client";
import Batiment from "@/models/Batiment";
import Link from "next/link";
import {useState} from "react";
import HttpService from "@/services/HttpService";
import API_URL from "@/app/constants/ApiUrl";
import {Alert, Button, Modal} from "react-daisyui";
import { Input } from "react-daisyui";
import AddBatimentComponent from "@/components/batiments/AddBatimentComponent";

export default function BatimentComponent({...props}:{batiments:Batiment[]}){
const [batiments, setBatiments] = useState<Batiment[]>(props.batiments);
const [showAddDialog, setShowAddDialog] = useState<boolean>(false);


    return(
    <>
        <h2>Bâtiments</h2>
        <Button onClick={()=>{
            setShowAddDialog(true);
        }}>Ajouter</Button><br/>
        {showAddDialog && <AddBatimentComponent batiment={{}}/>}
        <Link href={"/public"}><Button>Retour à l'accueil</Button></Link>
        {!showAddDialog && <ul>
            {batiments.map((batiment:Batiment) =><li key={batiment.id}>
                {batiment.adresse} {batiment.ville} <span onClick={
                ()=> {
                    <Alert status={"warning"}>Attention, vous allez supprimer un bâtiment.</Alert>
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
        </ul>}
    </>
)
}