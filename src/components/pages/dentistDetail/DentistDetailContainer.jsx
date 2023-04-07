import { Table, TableRow } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DentistDetailContainer = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    //llama a la api para obtener los datos
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        {
          setDentist(res.data);
        }
      })
      .catch((err) => console.log(Error));
  }, [id]);
  console.log(dentist);

  return (
    <>
      {dentist ? (

        <Table 

          style={{ border: "2px solid black",maringTop:"50px"}}
        >
          <tr>
            <td style={{ padding: "8px", border: "1px solid black" , background:"#a8dadc", fontFamily: "Raleway"  }}>
              {" "}
              <strong> Nombre y Apellido{" "} </strong>
            </td>
            <td style={{ padding: "8px", border: "1px solid black" , background:"#a8dadc", fontFamily: "Raleway"  }}>
              {" "}
              <strong> Telefono de contacto </strong>
            </td>
            <td style={{ padding: "8px", border: "1px solid black" , background:"#a8dadc", fontFamily: "Raleway"  }}>
              {" "}
              <strong> Correo Electrónico </strong>
            </td>
            <td style={{ padding: "8px", border: "1px solid black", background:"#a8dadc", fontFamily: "Raleway"   }}>
              {" "}
              <strong> Pagina Web </strong>
            </td>
          </tr>

          <tbody>
            <td style={{ padding: "8px", border: "1px solid black",fontFamily: "Raleway" }}>
              {" "}
              {dentist.name}
            </td>
            <td style={{ padding: "8px", border: "1px solid black", fontFamily: "Raleway" }}>
              {dentist.phone}
            </td>
            <td style={{ padding: "8px", border: "1px solid black", fontFamily: "Raleway" }}>
              {dentist.email}
            </td>
            <td style={{ padding: "8px", border: "1px solid black", fontFamily: "Raleway" }}>
              {dentist.website}
            </td>
          </tbody>
        </Table>
      ) : null}
    </>
  );
};
export default DentistDetailContainer;
