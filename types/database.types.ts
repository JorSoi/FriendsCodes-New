export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      companies: {
        Row: {
          benefits: string | null
          created_at: string
          id: number
          logo_url: string | null
          name: string | null
          status: Database["public"]["Enums"]["company_status"]
        }
        Insert: {
          benefits?: string | null
          created_at?: string
          id?: number
          logo_url?: string | null
          name?: string | null
          status?: Database["public"]["Enums"]["company_status"]
        }
        Update: {
          benefits?: string | null
          created_at?: string
          id?: number
          logo_url?: string | null
          name?: string | null
          status?: Database["public"]["Enums"]["company_status"]
        }
        Relationships: []
      }
      friends: {
        Row: {
          created_at: string
          friend_id: string
          id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          friend_id: string
          id?: number
          user_id: string
        }
        Update: {
          created_at?: string
          friend_id?: string
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "friends_friend_id_fkey"
            columns: ["friend_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "friends_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: number
          marked_as_read: boolean
          raw_notification_meta_data: Json | null
          recipient: string
          triggered_by: string
          type: Database["public"]["Enums"]["notification_types"]
          used_referral: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          marked_as_read?: boolean
          raw_notification_meta_data?: Json | null
          recipient: string
          triggered_by: string
          type: Database["public"]["Enums"]["notification_types"]
          used_referral?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          marked_as_read?: boolean
          raw_notification_meta_data?: Json | null
          recipient?: string
          triggered_by?: string
          type?: Database["public"]["Enums"]["notification_types"]
          used_referral?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_recipient_fkey"
            columns: ["recipient"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_triggered_by_fkey"
            columns: ["triggered_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_used_referral_fkey"
            columns: ["used_referral"]
            isOneToOne: false
            referencedRelation: "user_codes"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          email: string | null
          id: string
          updated_at: string | null
          user_name: string | null
        }
        Insert: {
          avatar_url?: string | null
          email?: string | null
          id: string
          updated_at?: string | null
          user_name?: string | null
        }
        Update: {
          avatar_url?: string | null
          email?: string | null
          id?: string
          updated_at?: string | null
          user_name?: string | null
        }
        Relationships: []
      }
      user_codes: {
        Row: {
          company_id: number
          created_at: string
          id: number
          referral_value: string
          user_id: string | null
        }
        Insert: {
          company_id: number
          created_at?: string
          id?: number
          referral_value: string
          user_id?: string | null
        }
        Update: {
          company_id?: number
          created_at?: string
          id?: number
          referral_value?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_codes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_friends_with_codes: {
        Args: {
          current_user_id: string
        }
        Returns: {
          created_at: string
          profile: Json
          user_codes: Json
        }[]
      }
      json_matches_schema: {
        Args: {
          schema: Json
          instance: Json
        }
        Returns: boolean
      }
      jsonb_matches_schema: {
        Args: {
          schema: Json
          instance: Json
        }
        Returns: boolean
      }
      jsonschema_is_valid: {
        Args: {
          schema: Json
        }
        Returns: boolean
      }
      jsonschema_validation_errors: {
        Args: {
          schema: Json
          instance: Json
        }
        Returns: string[]
      }
    }
    Enums: {
      company_status: "public" | "reviewing" | "private"
      notification_types: "new_friend" | "code_interaction"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

