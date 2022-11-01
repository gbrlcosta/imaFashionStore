import React from "react";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { CartContext } from "../../context/CartContext/cartContext";
import { CaretDoubleLeft, CaretDoubleRight } from "phosphor-react";
import styles from "../Produtos/Produtos.module.css";
import "./Recomendacao.css";

export default function ProductPage(params) {
  var { estoque } = useContext(CartContext);
  const arrowScroll = useRef(null);

  const tipo = estoque.find((produto) => produto.id === params.id).productType;

  estoque = estoque.filter(
    (produto) => produto.productType === tipo && produto.id !== params.id
  );

  const arrowLeft = (e) => {
    e.preventDefault();
    arrowScroll.current.scrollLeft -= arrowScroll.current.offsetWidth;
  };
  const arrowRight = (e) => {
    e.preventDefault();

    arrowScroll.current.scrollLeft += arrowScroll.current.offsetWidth;
  };

  return (
    <div className="recomendacaoContainer">
      <div>
        <p className="recomendacaoTitle">PRODUTOS SEMELHANTES</p>
      </div>

      <div className="arrowScroll" ref={arrowScroll}>
        {estoque?.map((produto) => {
          return (
            <div key={produto.id}>
              <div className={styles.carditem}>
                <img src={produto.img} />
                <div>
                  <Link to={`/productPage/${produto.id}`}>
                    <h3 className="recomendacaoName">{produto.productName}</h3>
                    <p>
                      <button className={styles.addproductbtn}>
                        Ver Produto
                      </button>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={arrowLeft}>
          <i className={styles.caretCircLeft}>
            <CaretDoubleLeft size={29} />
          </i>
        </button>
        <button onClick={arrowRight}>
          <i className={styles.caretCircRight}>
            <CaretDoubleRight size={29} />
          </i>
        </button>
      </div>
    </div>
  );
}
