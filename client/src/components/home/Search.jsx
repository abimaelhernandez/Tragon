// import React from 'react';
// import Autosuggest from 'react-autosuggest';
//
// const FoodItem = [
//   {
//     name:'Torta'
//   },
//   {
//     name:'Barbacoa'}
//   ];
//
//   const getSuggestions = value => {
//     const inputValue = value.trim().toLowerCase();
//     const inputLength = inputvalue.length;
//
//     return inputLength === 0 ? [] : FoodItem.filter(lang =>
//        lang.name.toLowerCase().slice(0, inputLength) === inputValue
//       );
//   };
//
//   const getSuggestionValue = suggestion => suggestion.name;
//
//   const renderSuggestion = suggestion = (
//     <div>
//       {suggestion.name}
//     </div>
//   );
//
//   class Search extends React.Component {
//     constructor(){
//       super();
//     this.state ={
//       value:'',
//       suggestions: []
//     };
//
//    this.onChange = this.onChange.bind(this);
//    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
//    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
//
//   }
//
//   onChange = (event, { newValue }) => {
//     this.setState({
//       value:newValue
//     });
//   };
//
//   onSuggestionsFetchRequested = ({ value }) => {
//     this.setState ({
//       suggestions: getSuggestions(value)
//     });
//   };
//
//   onSuggestionsClearRequested = () => {
//     this.setState({
//       suggestions: []
//     });
//   };
//
//   render(){
//     const { value, suggestions } = this.state;
//
//
//     const inputProps = {
//       placeholder: 'Que se te antoga, paisa?',
//       value,
//       onChnage: this.onChange
//     };
//
//     return (
//       <Autosuggest
//         suggestions={suggestions}
//         getSuggestionValue={getSuggestionValue}
//         renderSuggestion={renderSuggestion}
//         inputProps={inputProps}
//       />
//     );
//   }
//
// }
//
// export default Search;
