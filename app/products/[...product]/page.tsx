import React from 'react'
interface Params{
  product:string[];
}
interface Props {
    params: Params; 
}
export default function ProductDetail(props:Props) {
    const {params} = props
  return (
    <div>
      TRANG CHI TIẾT SẢN PHẨM CÓ ID LÀ : {params.product[0]}
    </div>
  )
}
