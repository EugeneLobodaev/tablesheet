# Project Documentation: "Tablesheet"

## Description

The "Tablesheet" project is a React component designed to display tabular data fetched from an API endpoint. It provides features for pagination, sorting, filtering, and resetting the table.

## Libraries and Dependencies Used

- [React](https://reactjs.org/) - a library for building user interfaces.

## Component Structure

The "Tablesheet" component consists of the following elements:

1. Table display: Renders the fetched data in a tabular format with columns for id, user, title, and completion status.
2. Pagination buttons: Allows navigation between pages of data.
3. Page number buttons: Displays buttons for each page to enable direct page navigation.
4. Filter options: Provides dropdowns to filter data based on completion status, sort by ID or title, and order ascending or descending.
5. Search input: Enables searching for specific data within the table.
6. Reset button: Resets all filters and returns the table to its initial state.

## Component States

- `table`: Holds the fetched data from the API endpoint.
- `pageNumber`: Tracks the current page number.
- `completed`: Tracks the completion status filter.
- `sorted`: Tracks the sorting criteria (by ID or title).
- `order`: Tracks the sorting order (ascending or descending).
- `search`: Tracks the search input value.
- `inputValue`: Tracks the input value for resetting purposes.

## Usage

1. Upon component rendering, data is fetched from the API and displayed in the table.
2. Pagination buttons enable navigation between pages.
3. Page number buttons allow direct page navigation.
4. Filter options provide flexibility to filter data based on completion status, sort by different criteria, and order.
5. Search input allows users to search for specific data within the table.
6. Reset button resets all filters and returns the table to its initial state.

## Conclusion

The "Tablesheet" project provides a versatile solution for displaying, navigating, and filtering tabular data in a React application.
