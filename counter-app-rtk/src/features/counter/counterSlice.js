import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk: simulate server call
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount, { rejectWithValue }) => {
    try {
      await new Promise((r) => setTimeout(r, 600));
      return Number(amount) || 0;
    } catch (err) {
      return rejectWithValue("Failed to increment asynchronously");
    }
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0, status: "idle" },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload) || 0;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
