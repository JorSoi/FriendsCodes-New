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
          company_categories:
            | Database["public"]["Enums"]["company_categories"][]
            | null
          company_description: string | null
          company_url: string | null
          created_at: string
          id: number
          logo_url: string | null
          name: string
          referral_sharing_reward: string | null
          referral_usage_reward: string | null
          spotlighted: boolean | null
          status: Database["public"]["Enums"]["company_status"]
        }
        Insert: {
          company_categories?:
            | Database["public"]["Enums"]["company_categories"][]
            | null
          company_description?: string | null
          company_url?: string | null
          created_at?: string
          id?: number
          logo_url?: string | null
          name: string
          referral_sharing_reward?: string | null
          referral_usage_reward?: string | null
          spotlighted?: boolean | null
          status?: Database["public"]["Enums"]["company_status"]
        }
        Update: {
          company_categories?:
            | Database["public"]["Enums"]["company_categories"][]
            | null
          company_description?: string | null
          company_url?: string | null
          created_at?: string
          id?: number
          logo_url?: string | null
          name?: string
          referral_sharing_reward?: string | null
          referral_usage_reward?: string | null
          spotlighted?: boolean | null
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
          triggered_by: string | null
          type: Database["public"]["Enums"]["notification_types"]
          used_referral: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          marked_as_read?: boolean
          raw_notification_meta_data?: Json | null
          recipient: string
          triggered_by?: string | null
          type: Database["public"]["Enums"]["notification_types"]
          used_referral?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          marked_as_read?: boolean
          raw_notification_meta_data?: Json | null
          recipient?: string
          triggered_by?: string | null
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
          created_at: string
          email: string | null
          id: string
          last_activity_at: string | null
          user_name: string | null
          visitor_count: number
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          id: string
          last_activity_at?: string | null
          user_name?: string | null
          visitor_count?: number
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          id?: string
          last_activity_at?: string | null
          user_name?: string | null
          visitor_count?: number
        }
        Relationships: []
      }
      user_codes: {
        Row: {
          company_id: number
          conversion_count: number
          created_at: string
          id: number
          pinned_at: string | null
          referral_description: string | null
          referral_reward: string | null
          referral_value: string
          user_id: string
          view_count: number
        }
        Insert: {
          company_id: number
          conversion_count?: number
          created_at?: string
          id?: number
          pinned_at?: string | null
          referral_description?: string | null
          referral_reward?: string | null
          referral_value: string
          user_id: string
          view_count?: number
        }
        Update: {
          company_id?: number
          conversion_count?: number
          created_at?: string
          id?: number
          pinned_at?: string | null
          referral_description?: string | null
          referral_reward?: string | null
          referral_value?: string
          user_id?: string
          view_count?: number
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
      increment_conversion_count: {
        Args: {
          user_code_id: number
        }
        Returns: undefined
      }
      increment_profile_visitor_count: {
        Args: {
          profile_owner_id: string
        }
        Returns: undefined
      }
      increment_view_count: {
        Args: {
          user_code_id: number
        }
        Returns: undefined
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
      company_categories:
        | "banking"
        | "crypto"
        | "education"
        | "fitness"
        | "food"
        | "housing"
        | "games"
        | "mobility"
        | "travel"
        | "shopping"
        | "other"
        | "software"
      company_status: "public" | "reviewing" | "private"
      notification_types: "new_friend" | "code_interaction"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      company_categories: [
        "banking",
        "crypto",
        "education",
        "fitness",
        "food",
        "housing",
        "games",
        "mobility",
        "travel",
        "shopping",
        "other",
        "software",
      ],
      company_status: ["public", "reviewing", "private"],
      notification_types: ["new_friend", "code_interaction"],
    },
  },
} as const

