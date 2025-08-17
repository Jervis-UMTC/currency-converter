# Currency Converter

A modern, responsive web-based currency converter that provides real-time exchange rates for converting between different currencies.

## Features

- **Real-time Exchange Rates**: Fetches current exchange rates from reliable APIs
- **Wide Currency Support**: Supports multiple international currencies
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Theme**: Modern dark UI with smooth animations
- **Input Validation**: Handles invalid inputs with user-friendly error messages
- **Clean Interface**: Simple and intuitive user experience

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS variables and responsive design
- **JavaScript (ES6+)**: Async/await for API calls and DOM manipulation
- **Exchange Rate API**: Real-time currency data

## APIs Used

- **Primary**: [ExchangeRate-API](https://api.exchangerate-api.com/) - For currency conversion
- **Fallback**: [Open Exchange Rates](https://open.er-api.com/) - For fetching available currencies

## Installation & Setup

1. **Clone or download** the project files
2. **Ensure you have the following files**:
   - `index.html`
   - `styles.css`
   - `script.js`
3. **Open `index.html`** in any modern web browser
4. **That's it!** No additional setup or installation required

## Usage

1. **Enter Amount**: Input the amount you want to convert
2. **Select Source Currency**: Choose the currency you're converting from
3. **Select Target Currency**: Choose the currency you're converting to
4. **Click Convert**: Get instant conversion results
5. **View Results**: The converted amount will be displayed in the result field

## Project Structure

```
currency-converter/
│
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and API calls
└── README.md           # This file
```

## Key Components

### HTML Structure
- Form with input fields for amount and currency selection
- Dropdown menus dynamically populated with available currencies
- Result display area with error handling

### CSS Features
- CSS custom properties (variables) for consistent theming
- Responsive design with mobile-first approach
- Smooth transitions and hover effects
- Dark theme with modern color palette

### JavaScript Functionality
- Async functions for API calls
- Dynamic population of currency options
- Form validation and error handling
- Real-time currency conversion

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Error Handling

The application includes robust error handling for:
- Invalid or negative number inputs
- API connection issues
- Missing or invalid currency selections

## Responsive Design

The converter is fully responsive and adapts to different screen sizes:
- **Desktop**: Full-width container with optimal spacing
- **Mobile**: Full-screen layout for better mobile experience

## Customization

You can easily customize the appearance by modifying the CSS variables in `styles.css`:

```css
:root {
  --bg-primary: #0f172a;      /* Main background */
  --bg-secondary: #1e293b;    /* Container background */
  --bg-input: #334155;        /* Input background */
  --text-primary: #e2e8f0;    /* Primary text color */
  --text-secondary: #94a3b8;  /* Secondary text color */
  --border-color: #475569;    /* Border color */
  --accent-primary: #3b82f6;  /* Button color */
  --accent-hover: #2563eb;    /* Button hover color */
}
```

## Future Enhancements

Potential improvements that could be added:
- Historical exchange rate charts
- Favorite currency pairs
- Offline mode with cached rates
- Multiple currency conversion
- Currency trend indicators

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please create an issue in the project repository.

---

**Made with ❤️ for easy currency conversion**
