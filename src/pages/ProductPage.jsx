import React from "react";
import { useParams } from "react-router-dom";
import Produto from "../components/Produto/Produto";
import Recomendacao from "../components/Recomendacao/Recomendacao";

export default function ProductPage() {
  const { id } = useParams();

  return (
    <div>
      <Produto id={id} />
      <Recomendacao id={id} />
    </div>
  );
}
