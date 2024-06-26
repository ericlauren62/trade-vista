import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { CryptoHero } from "../components/crypto/CryptoHero";
import CryptoMoreThan from "../components/crypto/CryptoThan";
import { TradeCrypto } from "../components/crypto/TradeCrypto";
import { CryptoFx } from "../components/crypto/CryptoFx";
import { CryptoFaq } from "../components/crypto/CryptoFaq";
import WithdrawalAlert from "../lib/WithdrawalAlert";

type Props = {};

const Cryptocurrencies = (props: Props) => {
  return (
    <MainLayout>
      <WithdrawalAlert>
        <CryptoHero />
        <CryptoMoreThan />
        <CryptoFx />
        <TradeCrypto />
        <CryptoFaq />
      </WithdrawalAlert>
    </MainLayout>
  );
};

export default Cryptocurrencies;
