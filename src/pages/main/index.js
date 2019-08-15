import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
  /* 
    VARIAVEL DE ESTADO PARA RECEBER OS ITENS DA API
  */

  state = {
    products: [],
    productInfo: {},
    page: 1,
  };

  /* 
    SEMPRE QUE FOR EXECUTAR UMA AÇÃO LOGO QUE O 
    COMPONEN É EXEBIDO EM TELA, DEVE SE USAR DIDMOUNT
  */
  componentDidMount(){
    this.loadProducts();
  }

  //usar arrow function pq ta sendo um função nossa
  //quando for uma funcao do react pode usar o modo normal
  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;

    //preenchendo variavel de estado
    this.setState({ products: docs, productInfo, page  });

  }
  /*
    products.map() foi utilizado para percorrer o vetor
    const {products} = this.state; busca a variavel product dentro do this
  */
  prevPage = () =>{
    const { page, productInfo } = this.state;
    if (page === 1) return;

    const pageNumber = productInfo.page-1;
    this.loadProducts(pageNumber);
  }

  //proxima pagina
  nextPage = () =>{
    const { page, productInfo } = this.state;
    if (page === productInfo.pages) return;

    const pageNumber = page+1;
    this.loadProducts(pageNumber);
  }

  render() {
    const {products, page, productInfo} = this.state;
    return (
      <div className="product-list">
        
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <a href="">Acessar</a>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>Proximo</button>
        </div>
      </div>
    )
  }
}