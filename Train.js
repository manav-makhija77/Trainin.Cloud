import React, { useState } from 'react'
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import "react-datepicker/dist/react-datepicker.css";

const Train = () => {
  document.title = "Search for Trains"
  const search = () => {
    alert("Loading Results")
  }
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div style={{ backgroundColor: 'antiquewhite', borderRadius: '25px' }}>
        <div className="get_in_touch">
          <h2 style={{ color: '#08068e', textAlign: 'center', fontFamily: 'Bruno Ace SC' }}>Find Trains</h2>
          <div className="container">
            <form onSubmit={search}>
              <div className="train-form row">

                <div className="form-field col-lg-6">
                  <input list="SourceStations" id="source" className="input-text " name="FromType" placeholder="Source" required />
                  <datalist id="SourceStations">


                    <option value="AJMER (AII) JN" />
                    <option value="AGRA CANTT (AGC) " />
                    <option value="ALIGARH (AJLN) JN" />
                    <option value="PRAYAGRAJ (PRY) JN" />
                    <option value="AMRITSAR (ASR) JN" />
                    <option value="AYODHYA (AY)" />
                    <option value="BALAGHAT (BTC) JN" />
                    <option value="BHOPAL (BPL) JN" />
                    <option value="BIKANER (BKN) JN" />
                    <option value="CHITTAURGARH (COR) " />
                    <option value="OLD DELHI (DLI)" />
                    <option value="LUCKNOW NR (LKO)" />
                    <option value="LUCKNOW NE (LJN)" />
                    <option value="LUCKNOW CITY (LC)" />
                    <option value="PATNA (PNBE) JN" />
                    <option value="PATNA SAHEB (PNC) " />
                    <option value="NEW DELHI (NDLS) JN" />
                    <option value="DEWAS (DWX)" />
                    <option value="GODHRA (GDA) JN" />
                    <option value="KSR BENGALURU (SBC) " />
                    <option value="BENGALURU CANT (BNC) " />
                    <option value="BENGALURU EAST (BNCE) " />
                    <option value="HYDERABAD (HYD) JN " />
                    <option value="GORAKHPUR (JKP) JN" />
                    <option value="GWALIOR (GWL) JN" />
                    <option value="AHMEDABAD (ADI) JN" />
                    <option value="SURAT (ST) JN" />
                    <option value="PUNE (PUNE) JN" />
                    <option value="HANUMANGARH JN" />
                    <option value="HOWRAH (HWH)JN" />
                    <option value="INDORE JN BG (INDB)" />
                    <option value="RAJENDRANAGAR (RJQ)" />
                    <option value="INDORE JN MG (INDM)" />
                    <option value="RAU (RAU)" />
                    <option value="JABALPUR (JBP) JN" />
                    <option value="JAIPUR (JP) JN" />
                    <option value="JALANDHAR CITY (JUC) JN" />
                    <option value="JALGAON (JL) JN" />
                    <option value="JHANSI A CABIN (JHSA) " />
                    <option value="JHANSI C B (JCO) " />
                    <option value="JODHPUR (JU) JN" />
                    <option value="JUNAGADH (JND) JN" />
                    <option value="KANPUR CENTRAL (CNB)" />
                    <option value="KOTA (KOTA) JN" />
                    <option value="LUDHIANA (LDH) JN" />
                    <option value="MANGALURU (MAJN) JN" />
                    <option value="MATHURA (MTJ) JN" />
                    <option value="NAGDA (NAD) JN" />
                    <option value="NAGPUR (NGP) JN" />
                    <option value="PANVEL (PNVL) JN" />
                    <option value="PRATAPGARH (PBH) JN" />
                    <option value="RAIPUR (R)JN" />
                    <option value="RAJKOT (RJT) JN" />
                    <option value="BORIVALI (BVI)" />
                    <option value="RANCHI (RNC)" />
                    <option value="RATLAM (RTM) JN" />
                    <option value="SATNA (STA)" />
                    <option value="SOLAPUR (SUR) JN" />
                    <option value="UJJAIN (UJN) JN" />
                    <option value="VARANASI (BSB) JN" />
                    <option value="VARANASI (BSBS) " />
                    <option value="VARANASI CITY (BCY) " />
                    <option value="KASHI (KEI)" />
                    <option value="VIJAYAWADA (BZA) JN" />
                    <option value="VISHAKAPATTANAM (VSKP) JN" />


                  </datalist>
                  <br />
                </div>
                <div className="form-field col-lg-6">
                  <input list="DestinationStations" className="input-text" name="FromType" placeholder="Destination" required />
                  <datalist id="DestinationStations">
                    <datalist id="SourceStations">

                      <option value="ADRA (ADRA) JN" />
                      <option value="AJMER (AII) JN" />
                      <option value="AGRA CANTT (AGC) " />
                      <option value="ALIGARH (AJLN) JN" />
                      <option value="PRAYAGRAJ (PRY) JN" />
                      <option value="AMRITSAR (ASR) JN" />
                      <option value="AYODHYA (AY)" />
                      <option value="BALAGHAT (BTC) JN" />
                      <option value="BAKHTIYARPUR (BKP) JN" />
                      <option value="BHOPAL (BPL) JN" />
                      <option value="BHOJIPURA (BPR) JN" />

                      <option value="BIKANER (BKN) JN" />
                      <option value="BILASPUR (BSP) JN" />
                      <option value="CHHAPRA (CPR)" />
                      <option value="CHITTAURGARH (COR) " />
                      <option value="COIMBATORE NORTH (CBF)" />
                      <option value="DEOGHAR (DJHR) JN" />
                      <option value="OLD DELHI (DLI)" />
                      <option value="LUCKNOW NR (LKO)" />
                      <option value="LUCKNOW NE (LJN)" />
                      <option value="LUCKNOW CITY (LC)" />
                      <option value="PATNA (PNBE) JN" />
                      <option value="PATNA SAHEB (PNC) " />
                      <option value="NEW DELHI (NDLS) JN" />
                      <option value="DEWAS (DWX)" />
                      <option value="DHARMAPURI (DPJ) JN" />
                      <option value="DHOLA JN (DLJ)" />
                      <option value="DUM DUM JN (DDJ)" />
                      <option value="FIROZPUR CITY (FZP) JN" />
                      <option value="FIROZPUR CANTT (FZR) JN" />
                      <option value="GHAZIPUR CITY (GCT) JN" />
                      <option value="GODHRA (GDA) JN" />
                      <option value="VASAI ROAD (BSR)" />
                      <option value="GONDIA (G) JN" />
                      <option value="KSR BENGALURU (SBC) " />
                      <option value="BENGALURU CANT (BNC) " />
                      <option value="BENGALURU EAST (BNCE) " />
                      <option value="HYDERABAD (HYD) JN " />
                      <option value="GORAKHPUR (JKP) JN" />
                      <option value="GWALIOR (GWL) JN" />
                      <option value="LOKMANIYATILAK T (LTT) " />
                      <option value="AHMEDABAD (ADI) JN" />
                      <option value="SURAT (ST) JN" />
                      <option value="C SHIVAJI MAH T (CSMT) JN" />
                      <option value="PUNE (PUNE) JN" />
                      <option value="ANAND VIHAR TRM (ANVT) " />
                      <option value="HANUMANGARH JN" />
                      <option value="HOWRAH (HWH)JN" />
                      <option value="INDORE JN BG (INDB)" />
                      <option value="RAJENDRANAGAR (RJQ)" />
                      <option value="INDORE JN MG (INDM)" />
                      <option value="RAU (RAU)" />
                      <option value="ITARSI (ET) JN" />
                      <option value="JABALPUR (JBP) JN" />
                      <option value="JAIPUR (JP) JN" />
                      <option value="JALANDHAR CITY (JUC) JN" />
                      <option value="JALGAON (JL) JN" />
                      <option value="JAMALPUR (JMP)JN" />
                      <option value="JHANSI A CABIN (JHSA) " />
                      <option value="JHANSI C B (JCO) " />
                      <option value="JODHPUR (JU) JN" />
                      <option value="JUNAGADH (JND) JN" />
                      <option value="KALOL (KLL) JN" />
                      <option value="KALYANI JN (KYI)" />
                      <option value="KAMAKHYA (KYQ)" />
                      <option value="KANPUR CENTRAL (CNB)" />
                      <option value="KARIMGANJ (KXJ) JN" />
                      <option value="KATNI (KTE)" />
                      <option value="KHAGARIA (KGG) JN" />
                      <option value="KHARAGPUR (KGP) JN" />
                      <option value="KOTA (KOTA) JN" />
                      <option value="KOT KAPURA (KKP)" />
                      <option value="KRISHNANAGAR CITY (KNJN) JN" />
                      <option value="KURLA (CLA) JN" />

                      <option value="LUDHIANA (LDH) JN" />
                      <option value="MADHUPUR (MDP) JN" />
                      <option value="MADURAI (MDU) JN" />
                      <option value="MAKSI (MKC) JN" />
                      <option value="MANGALURU (MAJN) JN" />
                      <option value="MANIKPUR (MKP) JN" />
                      <option value="MANSI (MNE) JN" />
                      <option value="MARWAR (MJ) JN" />
                      <option value="MATHURA (MTJ) JN" />
                      <option value="MIRAJ (MRJ) JN" />
                      <option value="MORADABAD (MB) " />
                      <option value="MUZAFFARPUR (MFP) JN" />
                      <option value="NAGDA (NAD) JN" />
                      <option value="NAGPUR (NGP) JN" />
                      <option value="PACHORA (PC) JN" />
                      <option value="PALANPUR (PNU) JN" />
                      <option value="PANIPAT (PNP) JN" />
                      <option value="PANVEL (PNVL) JN" />
                      <option value="PHAGWARA (PGW) JN" />
                      <option value="PRATAPGARH (PBH) JN" />
                      <option value="GHAT KOPAR (GC)" />
                      <option value="RAIPUR (R)JN" />
                      <option value="RAJKOT (RJT) JN" />
                      <option value="RAJPURA (RPJ) JN" />
                      <option value="BORIVALI (BVI)" />
                      <option value="RAMGANJ MANDI (RMA)" />
                      <option value="RANCHI (RNC)" />
                      <option value="RATLAM (RTM) JN" />
                      <option value="ROHTAK (ROK) JN" />
                      <option value="SAHARANPUR (SRE)" />
                      <option value="SATNA (STA)" />
                      <option value="SITAPUR CITY JN" />
                      <option value="SOLAPUR (SUR) JN" />
                      <option value="SONIPAT (SNP)" />
                      <option value="SULTANPUR (SLN)" />
                      <option value="TATANAGAR (TATA) JN" />
                      <option value="UJJAIN (UJN) JN" />
                      <option value="VARANASI (BSB) JN" />
                      <option value="VARANASI (BSBS) " />
                      <option value="VARANASI CITY (BCY) " />
                      <option value="KASHI (KEI)" />
                      <option value="VIJAYAWADA (BZA) JN" />
                      <option value="VISHAKAPATTANAM (VSKP) JN/">
                      </option>
                    </datalist>
                  </datalist>

                  <br />
                </div>
                <div className="form-field col-lg-6">
                  <input list="select-class" className="input-text" name="FromType" placeholder="Select Class" required />
                  <datalist id="select-class">
                    <option value="AC First Class (1A)" />
                    <option value="AC 2 Tier (2A)" />
                    <option value="AC 3 Tier (3A)" />
                    <option value="Sleeper (SL)" />

                  </datalist>
                  <br />
                </div>

                <div className="form-field col-lg-6">
                  <input list="select-type" className="input-text" name="FromType" placeholder="Select Type" required />
                  <datalist id="select-type">
                    <option value="GENERAL" />
                    <option value="TATKAL" />

                  </datalist>
                </div>

                <div className="form-field col-lg-6">
                  <label htmlFor="ClassType" className="input-text"><b>Choose Departure Date</b></label>
                  <DatePicker className="form-control" type="datetime-local" minDate={new Date()} selected={startDate} onChange={(Date) => setStartDate(Date)} required />
                  {/* <input className="form-control" type="datetime-local" placeholder="Select Departure  Date" /> */}

                </div>


                <div className="form-field col-lg-6">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Person With Disability
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      Train with Available Berth
                    </label>
                  </div>


                </div>


                <div class="form-field col-lg-12">
                  <button type="submit" value="submit" class="submit-btn" onclick="myFunction()"><Link to="/search" style={{ textDecoration: 'none', color: 'gold', fontSize: '1.5rem' }} >Search</Link></button>

                </div>

              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default Train
