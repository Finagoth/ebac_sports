<<<<<<< HEAD
import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import { adicionar, favoritar } from '../../store/reducers/carrinho'
=======
import { Produto as ProdutoType } from '../../App'
>>>>>>> 0b9085089accd17ff1264df8bb39f30e302123df
import * as S from './styles'

type Props = {
  produto: ProdutoType
<<<<<<< HEAD
=======
  aoComprar: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
>>>>>>> 0b9085089accd17ff1264df8bb39f30e302123df
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

<<<<<<< HEAD
const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch()

=======
const ProdutoComponent = ({
  produto,
  aoComprar,
  favoritar,
  estaNosFavoritos
}: Props) => {
>>>>>>> 0b9085089accd17ff1264df8bb39f30e302123df
  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
<<<<<<< HEAD
      <S.BtnComprar onClick={() => dispatch(favoritar(produto))} type="button">
=======
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
>>>>>>> 0b9085089accd17ff1264df8bb39f30e302123df
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
<<<<<<< HEAD
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
=======
      <S.BtnComprar onClick={() => aoComprar(produto)} type="button">
>>>>>>> 0b9085089accd17ff1264df8bb39f30e302123df
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
