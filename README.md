# Currency Converter

A responsive web-based currency converter application that allows users to convert between different currencies using live exchange rates. The app also displays country flags for selected currencies and supports currency swapping.

---

## Features

- **Dynamic Currency Conversion**: Convert between any two currencies using real-time exchange rates.
- **Live Exchange Rates**: Fetches the latest currency rates from [CurrencyAPI](https://currencyapi.com/).
- **Responsive Design**: Fully optimized for different screen sizes and devices.
- **User-Friendly Interface**: Simple layout with intuitive dropdowns, input fields, and swap functionality.
- **Country Flags**: Displays the flags of the selected currencies for better visualization.

---

## Demo

![Currency Converter Screenshot](https://res.cloudinary.com/rudra-backend/image/upload/v1736359694/41223aff-36f3-4547-a0e7-6d964cbacb18.png) 
_Screenshot showcasing the currency converter in action._

---

## Tech Stack

- **Frontend**:
  - HTML5
  - CSS3 (Responsive Design)
  - JavaScript (ES6+)
- **API**:
  - [CurrencyAPI](https://currencyapi.com/) for fetching live exchange rates.

---

## Project Structure

```plaintext
├── index.html    # Main HTML file
├── style.css     # Styling for the application
├── app.js        # Core JavaScript logic
├── codes.js      # Country codes and flag mapping
└── image.png     # Background image
```

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/thakurRUDRA14/CurrencyConverter.git
   ```

2. Navigate to the project directory:
   ```bash
   cd CurrencyConverter
   ```

3. Open `index.html` in any modern web browser:
   ```bash
   open index.html
   ```

---

## Usage

1. **Enter Amount**: Input the amount to be converted.
2. **Select Currencies**:
   - Use the dropdown menus to select the source (`From`) and target (`To`) currencies.
   - The corresponding country flags are displayed.
3. **Get Exchange Rate**:
   - Click the "Get Exchange Rate" button to fetch the live conversion rate.
4. **Swap Currencies**:
   - Use the swap icon to switch the `From` and `To` currencies.

---

## API Key Configuration

The app uses `CurrencyAPI` for fetching live exchange rates. Ensure your API key is valid by updating the `BASE_URL` variable in `app.js`:

```javascript
const BASE_URL = "https://api.currencyapi.com/v3/latest?apikey=your_api_key_here";
```

Replace `your_api_key_here` with your actual API key from [CurrencyAPI](https://currencyapi.com/).

---

## Known Issues

1. **API Key Restrictions**: Ensure your API key has the required permissions and quota.
2. **Limited Currency Data**: Some currencies might not have flag icons or exchange rates.

---

## Future Enhancements

- Add support for historical exchange rates.
- Enable multi-language support.
- Enhance error handling for API failures.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

Developed by [Rudra Pratap Singh](https://github.com/thakurRUDRA14). Feel free to reach out for collaboration or queries.
