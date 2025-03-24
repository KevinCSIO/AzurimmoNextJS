"use client";
import Link from "next/link";
import {useState} from "react";
import HttpService from "@/services/HttpService";
import API_URL from "@/app/constants/ApiUrl";
import {Alert, Button} from "react-daisyui";
import AddBatimentComponent from "@/components/batiments/AddBatimentComponent";
import Batiment from "@/models/Batiment";

export default function BatimentComponent({...props}:{batiments:Batiment[]}) {
    const [batiments, setBatiments] = useState<Batiment[]>(props.batiments);
    const [showAddDialog, setShowAddDialog] = useState<boolean>(false);
    const [editedBatiment, setEditedBatiment] = useState<Batiment>(); //

    const updateBatiment=(batiment:Batiment)=> {
        if(batiment.id==0) {
            HttpService.post(API_URL.batiments, batiment).then((response) => {
                setBatiments([...batiments, response]);
                setShowAddDialog(false);
            });
        }else{
            HttpService.put(API_URL.batiments}${batiment.id}, batiment).then(() => {
                setBatiments(batiments.map(b));
                setShowAddDialog(false);
            });
        }
    };

    return(
    <>
        <h2>Bâtiments</h2>
        <Button className={"btn"} onClick={()=>{
            setEditedBatiment(new Batiment());
            setShowAddDialog(true);
        }}>Ajouter...</Button><br/>
        {showAddDialog && <AddBatimentComponent batiment={editedBatiment}
                                                onClose={setShowAddDialog}
                                                onSubmit={updateBatiment}
        />}
        <Link href={"/"}><Button>Retour à l'accueil</Button></Link>
        {!showAddDialog && <>
        {/* Tableau DaisyUI dynamique */}
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-4">
            <table className="table">
                {/* En-tête */}
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Adresse</th>
                    <th>Ville</th>
                    <th>Actions</th>
                </tr>
                </thead>
                {/* Corps dynamique */}
                <tbody>
                {batiments.map((batiment, index) => (
                    <tr key={batiment.id}>
                        <th>{index + 1}</th>
                        <td>{batiment.adresse}</td>
                        <td>{batiment.ville}</td>
                        <td>
                            <Button
                                color="error"
                                size="sm"
                                onClick={() => {
                                    HttpService.delete(API_URL.batiments + batiment.id).then((response) => {
                                        if (response) {
                                            const newBatiments = batiments.filter((b: Batiment) => b.id !== batiment.id);
                                            setBatiments(newBatiments);
                                        }
                                    });
                                }}
                            >
                                Supprimer
                            </Button>
                            <Button
                                color="error"
                                size="sm"
                                onClick={() => {
                                    setEditedBatiment()
                                                                         }
                                Supprimer
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </>}
    </>
)
}