# All-in-one-calculator

# About This App
This calculator contains basic calculator and also has Currency Converter, Loan Calculator, and Unit Converter
Each page is a seperate app and main app holds all routes  by using React Routes.

# App Set-up
- yarn create-react-app calculator
- cd calculator
- yarn start


# Home page and Menu bar
Home page contains a short video from https://www.pexels.com/search/calculator/

and Menu bar contains links to all pages and icons used from https://react-icons.github.io/react-icons/

![Alt text](All-in-one-calculator/images/calculator.png "Optional Title")
# Basic calculator

Basic calculator has an app file called Calculator and Button compenent

- add, subtract, multiply, divide
- support decimal values
- calculate percentages
- invert values
- reset functionality
- format larger numbers
- output resize based on length

We used ```npm install react-textfit --save``` to fit text in Callculator screen

# Currency converter

Currency converter has an app called CurrencyConverter with currencyCodes file 

Get the exchange rate between two currencies and gives the given amount converted to the currency selected.

The converter uses the API https://www.currencyconverterapi.com/ which updates the values every hour.

In order to use this API you need to get an API key, and we made a proxy server https://github.com/mctagle/Proxy-server-Currency-Converter to hide the API key

from github in the development process.

- Amount
- From currency
- To currency
- Converted amount 

- used ```axios``` for Currency API

- We used React drop down by ```yarn add react-dropdown```

and imported to file ```import Dropdown from "react-dropdown";``` and ```import 'react-dropdown/style.css';```


- Numeral takes numbers or strings that it trys to convert into a number.

We used Numeral by ```yarn add numeral``` and imported in file ```import numeral from 'numeral';```

Syntax for Numeral => ```numeral(payment).format("$0,0.00")```

# loan calculator

Loan Calculator has an app file called LoanCalcaulator and LoanForm component

- Purchased Price
- Down Payment
- Loan Term(years)
- APR(%)

out put is calculated using this formula  ```M = P [ I ( 1 + I )^N ] / [ ( 1 + I )^N – 1 ]```

P = Principal amount (the total amount borrowed)

I = Interest rate on the mortgage

N = Number of periods (monthly mortgage payments)

- Numeral takes numbers or strings that it trys to convert into a number.

We used Numeral by ```yarn add numeral``` and imported in file ```import numeral from 'numeral';```

Syntax for Numeral => ```numeral(payment).format("$0,0.00")```


# Unit Converter

Unit converter has an app called UnitConverter and MeasureView component

- Tab bar containd of Units
- From Units
- To Units
- Amount input
- Amount Out put

- We used React native tab view ```yarn add react-native-tab-view``` and imported to file ```import { TabView, TabBar } from 'react-native-tab-view';```

- also we used Currency converter libarary using ```yarn add convert-units --save``` and imported to file ```import convert from 'convert-units';```

- used picker https://github.com/react-native-picker/picker 



