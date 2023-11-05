# Project README

This README provides an overview of the project setup, the progress made, code choices and decisions, and how to run the application locally. Additionally, it includes documentation for bonus features that have been implemented.

#### Video Demonstration

[Watch the video demonstration](https://www.loom.com/share/b9429e2fb23040e4828bb6089634d93e?sid=896b64c8-3428-49f2-8559-897d1a4fdd2d)

## Tasks Completed

### 1. Refactor and Enhancement

**a. Refactor the code for improved clarity and user-friendliness**

- **Status:** Completed
- **Code Choices and Decisions:**
  - Renamed the Table component to "Dashboard.vue" for clarity.
  - Replaced the HTML table with Vue to enhance data handling.
  - Refactored using Composition API and table components to improve code quality and UI responsiveness.
- **Challenges:** Adapting and binding data between components.

**b. Convert the application from Vue 2 to Vue 3**

- **Status:** Completed
- **Code Choices and Decisions:**
  - From the official site looked for Breaking changes between Vue 2 and Vue 3.
  - For converting switched to @vue/compat ( "the migration build") as it gives warnings about deprecated features and is a safe environment to incrementally upgrade code.
  - Then looked for errors did not find any so moved to checking warnings and fixed them to ensure code compatibility, upon a successful migration.
  - Finally, uninstalled migration build when the app is successfully migrated.
  - Utilized the Composition API for best practices in Vue 3.
- **Challenges:** Grasping grasping breaking changes, adapting code, and thorough testing.

**c. Create manageable single functionality components and improve code readability**

- **Code Choices and Decisions:**
  - Divided the user interface into smaller, reusable components.
  - Improved code organization and maintainability by dividing "Dashboard.vue" into various components such as Table.vue, TableBody.vue, TableHeader.vue, TableTd.vue,TableTh.vue, TableTr.vue.
  - As it aligns with Vue.js's component-based architecture
- **Challenges:** Coordinating data and events between components.

### 2. Pagination

**Implement pagination for a better user experience**

- **Status:** Completed
- **Code Choices and Decisions:**
  - Implemented pagination with options for rows per page (50, 100, 500, 100).
  - In the "Dashboard" component, a "paginationMeta" computed property calculates current page data, total page count, and more for pagination.
  - The "Pagination" component renders pagination controls and receives page count, callback function, and active page as props.
  - It uses v-for to generate clickable page links, highlighting the active page with the "active" class. When a page link is clicked, the callback function updates the currentPage property in the "Dashboard" component.
  - The displayed data on the current page is determined by "currentPage" and "perPage" values, stored in the "paginationMeta" property, and is used for the table display.
  - Utilized computed properties like "paginationMeta" and props/events for clean component communication.
- **Challenges:**
  - Synchronizing data between the "Dashboard" and "Pagination" components, especially when updating the current page data and handling user interactions.
  - Styling pagination controls

### 3. Color Coding

**Color code the table based on the "Status" column for better data interpretation**

- **Status:** Completed
- **Code Choices and Decisions:**
  - Defining CSS variables (e.g., --announced-bg) to represent background colors for each status. These variables provide a centralized color management system.
  - Creating CSS classes (e.g., .announced, .launched) to style table rows and cells based on status, using CSS variables for background colors.
  - Utilizing the getStatusClass function to dynamically determine the appropriate class based on the "Status" value.
  - Later changed it set the backgroundColor style property for each table cell in the "Status" column based on the "Status" value, to the corresponding color defined in the statusesColors object.
  - Swapped to the later approach as using Highcharts we can pass colors directly through that functionality, it is more convenient to manage colors there.
- **Challenges:** Data-CSS synchronization and maintaining consistency in variable/class usage.

### 4. Search

**Implement a search bar to filter rows based on specific criteria.**

- **Status:** Completed
- **Code Choices and Decisions:**

  - Initialization: Set up variables like searchKeywords, paginationMeta, and currentPage to handle search queries and pagination.
  - User Input: Users enter search queries, and the v-model binds the input to searchKeywords.
  - Computed Property paginationMeta: Filters and paginates data based on the search query. A loop checks elements against the query and filters based on specified columns.
  - Displaying Filtered Data: The template displays matching data. Elements with a status matching the query or not hidden by a filter are shown.
  - Pagination: Calculates the total pages based on perPage and filtered elements.
  - Updating UI: The component dynamically re-renders as users type or interact with pagination controls.
  - Search Sensitivity: Case-insensitive search for user-friendly results.

- **Challenges:**
  - Handling data filtering and pagination together.
  - Keeping the UI in sync with the component's data and computed properties

### Bonus Features

#### 1. Theme Switcher

- **Status:** Completed
- **Code Choices and Decisions:**
  - Added the functionality to switch between light and dark themes.
  - Saved theme preference in local storage for persistence.
- **Apply Theme:** The component updates the HTML element's `data-bs-theme` attribute to switch between "dark" and "light" theme modes.

#### 2. Pie Chart

- **Status:** Completed
- **Code Choices and Decisions:**
  - Implemented a pie chart using Highcharts to visualize the distribution of products based on their status.
  - The chart dynamically adapts based on selected status checkboxes for an interactive representation.

#### 3. UI Styling

- **Status:** Completed
- **Code Choices and Decisions:**
  - Incorporated the Bootstrap package to enhance overall UI styling.
  - Added navigation bars, tables, and hover effects for a more visually appealing and user-friendly interface.

#### 4. Test Cases

- **Status:** Completed
- **Code Choices and Decisions:**
  - Implemented test cases for the "Dashboard.vue" component to cover a few scenarios.
  - Enhances the stability and maintainability of the application.

## Local Setup

To run the application locally, follow these steps:

1. Install project dependencies:

   ```sh
   npm install
   ```

2. Compile and hot-reload for development:

   ```sh
   npm run dev
   ```

3. Compile and hot-reload for development:

   ```sh
   npm run build
   ```

4. Run tes cases:

   ```sh
   npm test
   ```

5. Access the application at the specified URL in your browser.

Enjoy using the application with all the implemented enhancements and bonus features!
