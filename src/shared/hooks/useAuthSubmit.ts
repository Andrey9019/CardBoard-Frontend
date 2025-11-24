'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useSession } from '@/contexts/SessionContext';

interface AuthData {
  email: string;
  password: string;
  confirmPassword?: string;
  name?: string;
}

export const useAuthSubmit = (formType: 'signin' | 'signup') => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { login } = useSession();

  const mutation = useMutation({
    mutationFn: async (data: AuthData) => {
      const endpoint = formType;
      const url = `/api/auth/${endpoint}`;
      console.log('url', url);
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error(`Помилка ${endpoint}: ${response.statusText} `);
      }
      return response.json();
    },
    onSuccess: (result) => {
      console.log('Auth success:', result);

      if (formType === 'signin' && result.token && result.user) {
        login(result.user, result.token);
      } else if (formType === 'signup') {
        console.log('Реєстрація успішна, переходимо на логін');
        router.push('/sign');
      }

      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error) => {
      console.log('Auth error:', error);
    },
  });
  return mutation;
};
