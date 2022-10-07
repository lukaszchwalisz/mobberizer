import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q6({ navigation, route }) {
  return (
         <ScrollView style={styles.contain}>
           <Card style={styles.contain}>
           <Card.Content>
             <Title style={styles.tabs_title}>Czy i w jaki sposób pracodawca może monitorować pracę pracowników?</Title>
             <Paragraph style={styles.tabs_subtitle}>Pracodawca może monitorować pracę pracowników, jeżeli uzna, że jest to niezbędne dla bezpieczeństwa pracowników jak
              i swojego mienia. Pracodawca ma obowiązek poinformować pracowników o wprowadzeniu monitoringu (nie później niż 2 tygodnie przed uruchomieniem). 
              Wszelkie nagrania obrazu może przetwarzać jedynie do ściśleokreślonych celów i przechowywać przez okres nieprzekraczający 3 miesięcy.  
              W wypadku kiedy nagrania stanowią dowód w postępowaniu sądowym, termin ten może ulec przedłużeniu do czasu prawomocnego zakończenia postępowania.
             </Paragraph>
             <Paragraph style={styles.quotes}>
             Kodeks Pracy Art. 22(2) {"\n"}
            §1. Jeżeli jest to niezbędne do zapewnienia bezpieczeństwa pracowników lub ochrony mienia lub kontroli produkcji lub zachowania w tajemnicy informacji,
            których ujawnienie mogłoby narazić pracodawcę na szkodę, pracodawca może wprowadzić szczególny nadzór nad terenem zakładu pracy lub terenem wokół zakładu pracy
              w postaci środków technicznych umożliwiających rejestrację obrazu (monitoring). {"\n"}
            § 1(1). Monitoring nie obejmuje pomieszczeń udostępnianych zakładowej organizacji związkowej. {"\n"}
            § 2. Monitoring nie obejmuje pomieszczeń sanitarnych, szatni, stołówek oraz palarni, chyba że stosowanie monitoringu w tych pomieszczeniach jest niezbędne do realizacji 
            celu określonego w§ 1 i nie naruszy to godności orazinnych dóbr osobistych pracownika, wszczególności poprzezzastosowanie technik uniemożliwiających rozpoznanie
            przebywających w tych pomieszczeniach osób. Monitoring pomieszczeń sanitarnych wymaga uzyskania uprzedniej zgody zakładowej organizacji związkowej, a jeżeli u 
            pracodawcy nie działa zakładowa organizacja związkowa - uprzedniej zgody przedstawicieli pracowników wybranych w trybie przyjętym u danego pracodawcy. {"\n"}
            §3. Nagrania obrazu pracodawca przetwarza wyłącznie do celów, dla których zostały zebrane, i przechowuje przez okres nieprzekraczający 3 miesięcy od dnia nagrania. {"\n"}
            §4. W przypadku, w którym nagrania obrazu stanowią dowód w postępowaniu prowadzonym na podstawie prawa lub pracodawca powziął wiadomość, iż mogą one stanowić dowód 
            w postępowaniu, termin określony w§3 ulega przedłużeniu do czasu prawomocnego zakończenia postępowania. {"\n"}
            §5. Po upływie okresów, októrych mowa w§3 lub 4, uzyskane w wyniku monitoringu nagrania obrazu zawierające dane osobowe podlegają zniszczeniu, o ile przepisy odrębne
            nie stanowią inaczej. {"\n"}
            §6. Cele, zakres oraz sposób zastosowania monitoringu ustala się w układzie zbiorowym pracy lub w regulaminie pracy albo w obwieszczeniu, jeżeli pracodawca nie jest
            objęty układem zbiorowym pracy lub nie jest obowiązany doustalenia regulaminu pracy. {"\n"}
            §7. Pracodawca informuje pracowników o wprowadzeniu monitoringu, w sposób przyjęty u danego pracodawcy, nie później niż 2 tygodnie przed jego uruchomieniem.
            §8. Pracodawca przed dopuszczeniem pracownika dopracy przekazuje mu na piśmie informacje, o których mowa w§6. {"\n"}
            §9. W przypadku wprowadzenia monitoringu pracodawca oznacza pomieszczenia i teren monitorowany w sposób widoczny i czytelny, za pomocą odpowiednich znaków lub ogłoszeń
            dźwiękowych, nie później niż jeden dzień przed jego uruchomieniem. {"\n"}
            § 10. Przepis § 9 nie narusza przepisów art.12 i art.13 rozporządzenia 2016/679.
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};