import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { adminLogin } from "@/app/_utils/login";
import toast from "react-hot-toast";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ name, password }, thunkAPI) => {
    try {
      const res = await adminLogin({ name, password });
      localStorage.setItem("user", JSON.stringify(res));
      toast.success("Login successful");
      return res;
    } catch (err) {
      toast.error("Login failed: " + (err.message || "Unknown error"));
      return thunkAPI.rejectWithValue(err.message || "Login failed");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        localStorage.removeItem("user");
        if (action.payload?.includes("401")) {
          state.error = "Access Denied! Invalid username or password";
        } else {
          state.error = action.payload;
        }
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
