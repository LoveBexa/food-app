import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

// Helper function return JSX code for single item (keeps it leaner)
function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

function CategoriesScreen() {
  // Categories is an array
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
