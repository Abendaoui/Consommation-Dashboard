import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ApartmentIcon from '@mui/icons-material/Apartment'
import PinDropIcon from '@mui/icons-material/PinDrop'
import DataThresholdingIcon from '@mui/icons-material/DataThresholding'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import TableChartIcon from '@mui/icons-material/TableChart'
import BarChartIcon from '@mui/icons-material/BarChart'
import DescriptionIcon from '@mui/icons-material/Description'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
export const navBarLinks = [
  {
    id: 1,
    label: 'Utilisateurs',
    link: '',
    icon: <SupervisorAccountIcon />,
  },
  {
    id: 2,
    label: 'Annees',
    link: 'annees',
    icon: <CalendarMonthIcon />,
  },
  {
    id: 3,
    label: 'Departements',
    link: 'departements',
    icon: <ApartmentIcon />,
  },
  {
    id: 4,
    label: 'Regions',
    link: 'regions',
    icon: <PinDropIcon />,
  },
  {
    id: 5,
    label: 'Consommations',
    link: 'consommations',
    icon: <DataThresholdingIcon />,
  },
  {
    id: 6,
    label: 'Operateurs',
    link: 'Operateurs',
    icon: <PrecisionManufacturingIcon />,
  },
  {
    id: 7,
    label: 'Produits',
    link: 'produits',
    icon: <WaterDropIcon />,
  },
  {
    id: 8,
    label: 'Tables',
    link: 'tables',
    icon: <TableChartIcon />,
  },
  {
    id: 9,
    label: 'Graphiques',
    link: 'graphs',
    icon: <BarChartIcon />,
  },
  {
    id: 10,
    label: 'Excels',
    link: 'excels',
    icon: <DescriptionIcon />,
  },
]

export const userHeaders = [
  { id: 1, title: 'Nom Et Prenom' },
  { id: 2, title: 'Département' },
  { id: 3, title: 'Délégué Par' },
  { id: 4, title: 'Telephone' },
  { id: 5, title: 'Status' },
  { id: 6, title: 'Actions' },
]

export const yearsHeaders = [
  { id: 1, title: 'Année' },
  { id: 2, title: 'Actions' },
]

export const depHeaders = [
  { id: 1, title: 'Département' },
  { id: 2, title: 'Région' },
  { id: 3, title: 'Actions' },
]
export const regionHeaders = [
  { id: 1, title: 'Région' },
  { id: 2, title: 'Actions' },
]

export const operateursHeaders = [
  { id: 1, title: 'Operateur' },
  { id: 2, title: 'Actions' },
]

export const produitHeaders = [
  { id: 1, title: 'Produit' },
  { id: 2, title: 'Actions' },
]

export const consommationHeaders = [
  { id: 1, title: 'Année' },
  { id: 2, title: 'Région' },
  { id: 3, title: 'Département Credit' },
  { id: 4, title: 'Dota Définitive' },
  { id: 5, title: 'Commission' },
  { id: 6, title: 'Produit' },
  { id: 7, title: 'Actions' },
]
export const tableHeaders = [
  { id: 1, title: 'Mois' },
  { id: 2, title: 'Montant' },
  { id: 3, title: 'Année' },
  { id: 4, title: 'Produit' },
  { id: 5, title: 'Région' },
  { id: 6, title: 'Département' },
  { id: 7, title: 'Debut' },
  { id: 8, title: 'Fin' },
]

export const tableBody = [
  {
    id: 1,
    month: 'Mars',
    montant: 1500.0,
    year: 2024,
    product: 'eau',
    region: 'Rabat-Sale-Kenitre',
    department: 'Rabat',
    start: '12-08-2024',
    fin: '12-10-2024',
  },
  {
    id: 2,
    month: 'Janvier',
    montant: 1200.0,
    year: 2024,
    product: 'électricité',
    region: 'Fés-Mekées',
    department: 'Fes',
    start: '01-02-2024',
    fin: '01-05-2024',
  },
  {
    id: 3,
    month: 'Decemeber',
    montant: 500.0,
    year: 2023,
    product: 'eau',
    region: 'Casablanca',
    department: 'Casablanca',
    start: '01-08-2023',
    fin: '01-09-2023',
  },
  {
    id: 4,
    month: 'Mai',
    montant: 1200.0,
    year: 2022,
    product: 'électricité',
    region: 'Tangier',
    department: 'Tangier',
    start: '01-02-2022',
    fin: '01-05-2022',
  },
  {
    id: 5,
    month: 'October',
    montant: 1800.0,
    year: 2024,
    product: 'eau',
    region: 'Agadir',
    department: 'Agadir',
    start: '01-10-2024',
    fin: '31-10-2024',
  },
  {
    id: 6,
    month: 'April',
    montant: 1100.0,
    year: 2023,
    product: 'électricité',
    region: 'Marrakech',
    department: 'Marrakech',
    start: '01-04-2023',
    fin: '30-04-2023',
  },
  {
    id: 7,
    month: 'June',
    montant: 1350.0,
    year: 2022,
    product: 'eau',
    region: 'Rabat',
    department: 'Rabat',
    start: '01-06-2022',
    fin: '30-06-2022',
  },
  {
    id: 8,
    month: 'February',
    montant: 950.0,
    year: 2022,
    product: 'électricité',
    region: 'Rabat',
    department: 'Rabat',
    start: '01-02-2022',
    fin: '28-02-2022',
  },
]

export const excelHeaders = [
  { id: 1, title: 'EAU' },
  { id: 2, title: 'DElEGAT CREDIT' },
  { id: 3, title: 'DOTAION DEFINITIVE' },
  { id: 4, title: 'CONSOMAT' },
  { id: 5, title: '1 TRI' },
  { id: 6, title: '2 TRI' },
  { id: 7, title: '3 TRI' },
  { id: 8, title: '4 TRI' },
  { id: 9, title: 'TOTAL DPCI' },
  { id: 10, title: 'CAISE REGION' },
  { id: 11, title: 'OBSERVATION' },
]

// Customer
export const navLinks = [
  { id: 1, label: 'Formulaire', icon: <TextSnippetIcon />, href: '/formdata' },
  { id: 2, label: 'Table', icon: <TableChartIcon />, href: '/tabledata' },
  { id: 3, label: 'Graphique', icon: <BarChartIcon />, href: '/graphdata' },
]


export const tableDataHeaders = [
  { id: 1, title: 'Mois' },
  { id: 2, title: 'Montant' },
  { id: 3, title: 'Année' },
  { id: 4, title: 'Produit' },
  { id: 7, title: 'Debut' },
  { id: 8, title: 'Fin' },
]

export const tableDataBody = [
  {
    id: 1,
    month: 'Mars',
    montant: 1500.0,
    year: 2024,
    product: 'eau',
    start: '12-08-2024',
    fin: '12-10-2024',
  },
  {
    id: 2,
    month: 'Janvier',
    montant: 1200.0,
    year: 2024,
    product: 'électricité',
    start: '01-02-2024',
    fin: '01-05-2024',
  },
  {
    id: 3,
    month: 'Decemeber',
    montant: 500.0,
    year: 2023,
    product: 'eau',
    start: '01-08-2023',
    fin: '01-09-2023',
  },
  {
    id: 4,
    month: 'Mai',
    montant: 1200.0,
    year: 2022,
    product: 'électricité',
    start: '01-02-2022',
    fin: '01-05-2022',
  },
  {
    id: 5,
    month: 'October',
    montant: 1800.0,
    year: 2024,
    product: 'eau',
    start: '01-10-2024',
    fin: '31-10-2024',
  },
  {
    id: 6,
    month: 'April',
    montant: 1100.0,
    year: 2023,
    product: 'électricité',
    start: '01-04-2023',
    fin: '30-04-2023',
  },
  {
    id: 7,
    month: 'June',
    montant: 1350.0,
    year: 2022,
    product: 'eau',
    start: '01-06-2022',
    fin: '30-06-2022',
  },
  {
    id: 8,
    month: 'February',
    montant: 950.0,
    year: 2022,
    product: 'électricité',
    start: '01-02-2022',
    fin: '28-02-2022',
  },
]