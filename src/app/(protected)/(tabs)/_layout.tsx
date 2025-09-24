import { useLingui } from "@lingui/react/macro";
import { Tabs } from "expo-router";
import { Home } from "lucide-react-native";
import React from "react";

import { HapticTab } from "@/components/ui/haptic-tab";
import { Icon } from "@/components/ui/icon";
import useTheme from "@/hooks/theme/useTheme";
import { THEME } from "@/lib/theme";

function TabsLayout() {
  const { theme } = useTheme();
  const { i18n } = useLingui();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: THEME[theme].primary,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: i18n._("Home"),
          tabBarIcon: ({ color }) => (
            <Icon size={28} as={Home} style={{ color }} />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;
