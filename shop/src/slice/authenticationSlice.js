import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to check login status
export const checkLoginStatus = createAsyncThunk("auth/checkLoginStatus", async (_, thunkAPI) => {
    try {
        const { data } = await axios.get("http://localhost:7000/shop/profile", { withCredentials: true });

        return data.user; // User data from backend
    } catch (error) {
        return thunkAPI.rejectWithValue("Not logged in:", error.message);
    }
});

// Thunk to handle logout
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        await axios.post("http://localhost:7000/auth/logout", {}, { withCredentials: true });
        return null; // Clear user data
    } catch (error) {
        return thunkAPI.rejectWithValue("Logout failed ", error.message);
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // Check login status
        builder.addCase(checkLoginStatus.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(checkLoginStatus.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(checkLoginStatus.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.payload;
        });

        // Logout
        builder.addCase(logout.fulfilled, (state) => {
            state.user = null;
        });
        builder.addCase(logout.rejected, (state, action) => {
            state.error = action.payload;
        });
    },
});

export default authSlice.reducer;
