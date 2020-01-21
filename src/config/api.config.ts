export let backendUrl = "http://localhost:8080"; // Set local as default

export function setEnvironment() {
  this.backendUrl = "http://localhost:8080";
}

export const API_PATH = [
  // USER
  {
    CATEGORY: "USER",
    METHOD: "POST",
    PATH: "/createUser"
  },
  {
    CATEGORY: "USER",
    METHOD: "DELETE",
    PATH: "/deleteUser"
  },
  {
    CATEGORY: "USER",
    METHOD: "GET",
    PATH: "/getAllUsers"
  },
  {
    CATEGORY: "USER",
    METHOD: "GET",
    PATH: "/getUser"
  },
  {
    CATEGORY: "USER",
    METHOD: "PUT",
    PATH: "/updateUser"
  },
  // PRODUCT
  {
    CATEGORY: "PRODUCT",
    METHOD: "POST",
    PATH: "/createProduct"
  },
  {
    CATEGORY: "PRODUCT",
    METHOD: "DELETE",
    PATH: "/getAllProducts"
  },
  {
    CATEGORY: "PRODUCT",
    METHOD: "GET",
    PATH: "/getProduct"
  },
  {
    CATEGORY: "PRODUCT",
    METHOD: "PUT",
    PATH: "/updateProduct"
  },
  {
    CATEGORY: "PRODUCT",
    METHOD: "GET",
    PATH: "/getAllProducts"
  },
  // ORDER
  {
    CATEGORY: "ORDER",
    METHOD: "POST",
    PATH: "/createOrder"
  },
  {
    CATEGORY: "ORDER",
    METHOD: "DELETE",
    PATH: "/deleteOrder"
  },
  {
    CATEGORY: "ORDER",
    METHOD: "GET",
    PATH: "/getAllOrders"
  },
  {
    CATEGORY: "ORDER",
    METHOD: "GET",
    PATH: "/getOrder"
  },
  {
    CATEGORY: "ORDER",
    METHOD: "GET",
    PATH: "/getOrderByUID"
  },
  {
    CATEGORY: "ORDER",
    METHOD: "PUT",
    PATH: "/updateOrder"
  },
  // BOARD
  {
    CATEGORY: "BOARD",
    METHOD: "POST",
    PATH: "/createBoard"
  },
  {
    CATEGORY: "BOARD",
    METHOD: "DELETE",
    PATH: "/deleteBoard"
  },
  {
    CATEGORY: "BOARD",
    METHOD: "GET",
    PATH: "/getAllBoard"
  },
  {
    CATEGORY: "BOARD",
    METHOD: "GET",
    PATH: "/getBoard"
  },
  {
    CATEGORY: "BOARD",
    METHOD: "PUT",
    PATH: "/updateBoard"
  },
  // COMMENT
  {
    CATEGORY: "COMMENT",
    METHOD: "POST",
    PATH: "/createComment"
  },
  {
    CATEGORY: "COMMENT",
    METHOD: "DELETE",
    PATH: "/deleteComment"
  },
  {
    CATEGORY: "COMMENT",
    METHOD: "GET",
    PATH: "/getAllCommentByBID"
  },
  {
    CATEGORY: "COMMENT",
    METHOD: "PUT",
    PATH: "/updateComment"
  }
]

/**
 * 
 * @param path can be exact path or category name
 * @param met (Optional) use it for 2 parameters only
 *        e.g) getAPIPath('createUser') or getAPIPath('USER', 'POST')
 */
export function getAPIPath(path: string, met?: string) {
  if(!met) {
    return this.API_PATH.find(target => target.PATH == path).PATH;
  } else {
    path = path.toUpperCase();
    return this.API_PATH.find(target => target.CATEGORY == path && target.METHOD == met).PATH;  
  }
}
