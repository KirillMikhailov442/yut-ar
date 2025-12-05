"use client";

import React, { useEffect } from "react";
import styles from "./Product.module.scss";
import { useParams, useRouter } from "next/navigation";
import { useProduct } from "@hooks/useProducts";
import LoadingScreen from "@screens/Loading";
import Image from "next/image";

const ProductScreen = () => {
  const { back, push } = useRouter();
  const id = useParams<{ id: string }>().id;
  const product = useProduct(Number(id));

  useEffect(() => {
    if (product.isError) {
      push("/projects");
    }
  }, [product.isError]);

  if (product.isPending) return <LoadingScreen />;

  return (
    <div className="flex flex-col min-h-screen gap-4">
      <header>
        <button onClick={back} className="px-4 py-[8px] bg-[var(--yellow)]">
          НАЗАД
        </button>
      </header>
      <div className="flex-grow flex px-4 mb-6">
        <div className="w-[700px] mx-auto">
          <Image
            src={product.data?.photos[0] || ""}
            alt="preview"
            width={700}
            height={400}
            className="mb-3"
          />

          <h5 className="mb-3">{product.data?.title}</h5>
          <p>{product.data?.description}</p>
          <h5 className="my-2">СУММА: {product.data?.cost} руб</h5>
          <p>Высота: {product.data?.depth} см</p>
          <p>Ширина: {product.data?.width} см</p>
          <p>Длина: {product.data?.height} см</p>

          <h5 className="mt-10 mb-3">Вид с других ракурсов</h5>
          <div className="flex flex-col gap-3">
            {product.data?.photos
              .filter((item, index) => index != 0 && item != null)
              .map((photo, index) => (
                <Image
                  key={index}
                  src={photo || ""}
                  alt="preview"
                  width={700}
                  height={400}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
