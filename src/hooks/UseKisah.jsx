import { useState, useCallback } from "react";
import useApi from "./UseApi";

const useKisah = () => {
  const { request, loading, error } = useApi();
  const [stories, setStories] = useState([]);
  const [currentStory, setCurrentStory] = useState(null);

  const fetchStories = useCallback(async (params = "") => {
    try {
      const query = params ? `?${params}` : "?limit=100"; 
      const response = await request(`/stories${query}`);
      if (response.data && response.data.data) {
        setStories(response.data.data);
      }
    } catch (err) {
      console.error("Gagal mengambil kisah pelanggan:", err);
    }
  }, [request]);

  
  const fetchStoryById = useCallback(async (id) => {
    try {
      const response = await request(`/stories?limit=1000`);
      const found = response.data.data.find(s => s.id === parseInt(id));
      setCurrentStory(found);
      return found;
    } catch (err) {
      console.error("Gagal mengambil detail kisah:", err);
    }
  }, [request]);

  const createStory = async (formData) => {
    return await request("/stories", "POST", formData);
  };

  const updateStory = async (id, formData) => {
    return await request(`/stories/${id}`, "PUT", formData);
  };

  const deleteStory = async (id) => {
    await request(`/stories/${id}`, "DELETE");
    setStories((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    stories,
    currentStory,
    fetchStories,
    fetchStoryById,
    createStory,
    updateStory,
    deleteStory,
    loading,
    error,
  };
};

export default useKisah;