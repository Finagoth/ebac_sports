<<<<<<< HEAD
import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import { RootState } from '../store'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootState) => state.carrinho.favoritos)

=======
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({
  produtos,
  favoritos,
  adicionarAoCarrinho,
  favoritar
}: Props) => {
>>>>>>> 0b9085089accd17ff1264df8bb39f30e302123df
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

<<<<<<< HEAD
  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
=======
  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
>>>>>>> 0b9085089accd17ff1264df8bb39f30e302123df
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
<<<<<<< HEAD
=======
            favoritar={favoritar}
            aoComprar={adicionarAoCarrinho}
>>>>>>> 0b9085089accd17ff1264df8bb39f30e302123df
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
